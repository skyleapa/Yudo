import { Pose } from '@tensorflow-models/pose-detection';


const Nodes = (ctx, pose) => {
    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'white';
    
    ctx.lineWidth = 5;
    const facePoints = ['nose', 'left_eye', 'right_eye', 'left_ear', 'right_ear'];
    const scoreThreshold = 0.9;

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
        pose.keypoints.map(point => points.set(point.isDrawn, false));
        pose.keypoints.map(point => points.set(point.name, point));
        pose.keypoints.forEach(point => drawPoint(ctx, point, false, true));
        
        if (points.get('left_shoulder').isDrawn&& points.get('right_shoulder').isDrawn) {
            drawLine(ctx, points.get('left_shoulder'), points.get('right_shoulder'));
        }
        if (points.get('left_hip').isDrawn&& points.get('right_hip').isDrawn) {
            drawLine(ctx, points.get('left_hip'), points.get('right_hip'));
        }
        if (points.get('left_shoulder').isDrawn && points.get('left_elbow').isDrawn) {
            drawLine(ctx, points.get('left_shoulder'), points.get('left_elbow'));
        }
        if (points.get('left_elbow').isDrawn && points.get('left_wrist').isDrawn) {
            drawLine(ctx, points.get('left_elbow'), points.get('left_wrist'));
        }
        // left side
        if (points.get('left_shoulder').isDrawn && points.get('left_hip').isDrawn) {
            drawLine(ctx, points.get('left_shoulder'), points.get('left_hip'));
        }
        // left leg
        if (points.get('left_hip').isDrawn && points.get('left_knee').isDrawn) {
        drawLine(ctx, points.get('left_hip'), points.get('left_knee'));
        }

        if (points.get('left_knee').isDrawn && points.get('left_ankle').isDrawn) {
            drawLine(ctx, points.get('left_knee'), points.get('left_ankle'));
        }
        // right arm
        if (points.get('right_shoulder').isDrawn && points.get('right_elbow').isDrawn) {
            drawLine(ctx, points.get('right_shoulder'), points.get('right_elbow'));
        }
        if (points.get('right_elbow').isDrawn && points.get('right_wrist').isDrawn) {
            drawLine(ctx, points.get('right_elbow'), points.get('right_wrist'));
        }
        if (points.get('right_shoulder').isDrawn && points.get('right_hip').isDrawn) {
            drawLine(ctx, points.get('right_shoulder'), points.get('right_hip'));
        }
        
        // right leg
        drawLine(ctx, points.get('right_hip'), points.get('right_knee'));
        drawLine(ctx, points.get('right_knee'), points.get('right_ankle'));

        function drawPoint(ctx, point, showLabels, showFacePoints) {
            if (point.score >= scoreThreshold &&
                 (!facePoints.includes(point.name))) {
                point.isDrawn = true;
                ctx.fillStyle = '#74C5A3';
                ctx.strokeStyle = '#74C5A3';
                ctx.beginPath();
                ctx.arc(point.x, point.y, 10, 0, 2 * Math.PI);
                ctx.stroke();
                ctx.closePath();
                ctx.fillStyle = 'white';
                ctx.strokeStyle = 'white';
                if (showLabels) {
                    ctx.fillText(point.name, point.x, point.y);
                }
            }
        }
    }
}

export default Nodes;