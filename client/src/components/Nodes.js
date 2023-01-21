import { Pose } from '@tensorflow-models/pose-detection';


const Nodes = (ctx, pose) => {
    ctx.fillStyle = 'red';
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 5;

    function drawLine(ctx, pointA, pointB) {
        if (pointA && pointB) { 
          ctx.beginPath();
          ctx.moveTo(pointA.x, pointA.y);
          ctx.lineTo(pointB.x, pointB.y);
          ctx.stroke();
          ctx.closePath();
        }
    }

    if (ctx) {
        const points = new Map();
        pose.keypoints.map(point => points.set(point.name, point));
        pose.keypoints.forEach(point => drawPoint(ctx, point, false, true));
        
        drawLine(ctx, points.get('left_shoulder'), points.get('right_shoulder'));
        drawLine(ctx, points.get('left_hip'), points.get('right_hip'));
    
        // left arm
        drawLine(ctx, points.get('left_shoulder'), points.get('left_elbow'));
        drawLine(ctx, points.get('left_elbow'), points.get('left_wrist'));
        
        // left side
        drawLine(ctx, points.get('left_shoulder'), points.get('left_hip'));
        
        // left leg
        drawLine(ctx, points.get('left_hip'), points.get('left_knee'));
        drawLine(ctx, points.get('left_knee'), points.get('left_ankle'));

        // right arm
        drawLine(ctx, points.get('right_shoulder'), points.get('right_elbow'));
        drawLine(ctx, points.get('right_elbow'), points.get('right_wrist'));

        // right side
        drawLine(ctx, points.get('right_shoulder'), points.get('right_hip'));
        
        // right leg
        drawLine(ctx, points.get('right_hip'), points.get('right_knee'));
        drawLine(ctx, points.get('right_knee'), points.get('right_ankle'));

        function drawPoint(ctx, point, showLabels, showFacePoints) {
            if (showFacePoints) {
                ctx.beginPath();
                ctx.arc(point.x, point.y, 2, 0, 2 * Math.PI);
                ctx.stroke();
                ctx.closePath();
                if (showLabels) {
                    ctx.fillText(point.name, point.x, point.y);
                }
            }
        }
    }
}

export default Nodes;