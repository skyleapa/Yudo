import { Pose } from '@tensorflow-models/pose-detection';


const Nodes = (ctx, pose) => {
    if (ctx) {
        const leftEye = pose.keypoints.find((keypoint) => keypoint.name === 'left_eye');
        const rightEye = pose.keypoints.find((keypoint) => keypoint.name == 'right_eye');
        const leftMouth = pose.keypoints.find((keypoint) => keypoint.name === 'mouth_left');
        const rightMouth = pose.keypoints.find((keypoint) => keypoint.name === 'mouth_right');
        const nose = pose.keypoints.find((keypoint) => keypoint.name === 'nose');

        let bodyParts = {
            leftToe: pose.keypoints.find((keypoint) => keypoint.name === 'left_foot_index'),
            rightToe: pose.keypoints.find((keypoint) => keypoint.name == 'right_foot_index'),
            leftAnkle: pose.keypoints.find((keypoint) => keypoint.name === 'left_ankle'),
            rightAnkle: pose.keypoints.find((keypoint) => keypoint.name === 'right_ankle'),
            leftKnee: pose.keypoints.find((keypoint) => keypoint.name === 'left_knee'),
            rightKnee: pose.keypoints.find((keypoint) => keypoint.name === 'right_knee'),
            leftHip: pose.keypoints.find((keypoint) => keypoint.name === 'left_knee'),
            rightHip: pose.keypoints.find((keypoint) => keypoint.name === 'right_knee'),
            leftShoulder: pose.keypoints.find((keypoint) => keypoint.name === 'left_shoulder'),
            rightShoulder: pose.keypoints.find((keypoint) => keypoint.name === 'right_shoulder'),
            leftElbow: pose.keypoints.find((keypoint) => keypoint.name === 'left_elbow'),
            rightElbow: pose.keypoints.find((keypoint) => keypoint.name === 'right_elbow')
        };

        ctx.fillStyle = 'red';
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 5;
        
        for (const [key, value] of Object.entries(bodyParts)) {
            if (value) {
                ctx.beginPath();
                ctx.arc(value.x - 10, value.y - 10, 10, 0, 2 * Math.PI);
                ctx.fill();
            }
        }
        if (leftEye) {
            ctx.beginPath();
            ctx.arc(leftEye.x - 10, leftEye.y - 10, 10, 0, 2 * Math.PI);
            ctx.fill();
        }
        if (rightEye) {
            ctx.beginPath();
            ctx.arc(rightEye.x - 10, rightEye.y - 10, 10, 0, 2 * Math.PI);
            ctx.fill();
        }
        if (nose) {
            ctx.beginPath();
            ctx.arc(nose.x - 10, nose.y - 10, 10, 0, 2 * Math.PI);
            ctx.fill();
        }

        if (leftMouth && rightMouth) {
            ctx.beginPath();
            ctx.moveTo(leftMouth.x, leftMouth.y);
            ctx.lineTo(rightMouth.x, rightMouth.y);
            ctx.stroke();
        }
    }
}

export default Nodes;