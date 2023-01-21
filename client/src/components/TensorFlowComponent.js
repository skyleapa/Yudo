import * as poseDetection from '@tensorflow-models/pose-detection';
import '@tensorflow/tfjs-backend-webgl';
import React, { useState, useRef } from 'react';
import Nodes from './Nodes';
//import './CameraStyle.css';

const TensorFlowComponent = () => {

    // controls the current stream value
    const [stream, setStream] = useState(null);
    const webcamVideo = useRef();
    const canvasRef = useRef();

    let videoWidth = 680;
    let videoHeight = 480;

    const startVideoStream = async () => {
        try {

            let newStream = await navigator.mediaDevices
                .getUserMedia({
                video: {
                    facingMode: 'user',
                    width: videoWidth,
                    height: videoHeight
                },
                audio: false,
            });
            webcamVideo.current.srcObject = newStream;
            webcamVideo.current.width = videoWidth;
            webcamVideo.current.height = videoHeight;
            setStream(newStream);
        } catch (err) {
            console.log('Error: User denied permission for video stream', err);
        }
    }

    const startPoseDetection = async () => {
        const model = poseDetection.SupportedModels.BlazePose;
        const detector = await poseDetection.createDetector(model, {
          runtime: 'tfjs',
          modelType: 'lite',
          maxPoses: 1,
        });
      
        return detector;
    }

    // get the user's media stream
    const startStream = async () => {
        await startVideoStream();
        const poseDetector = await startPoseDetection();


        const render = async () => {
            const poses = await poseDetector.estimatePoses(webcamVideo.current);
            const ctx = canvasRef.current.getContext("2d");
            ctx.canvas.width = videoWidth;
            ctx.canvas.height = videoHeight;
            
            console.log(poses);
            
            ctx.clearRect(0, 0, 640, 480);

            if (poses[0]) {
                 Nodes(ctx, poses[0]);
            }    
            requestAnimationFrame(render);
        }

        render();
    };

    return (
        <div className="container">
	        <video ref={webcamVideo} id="webCamVideo" autoPlay playsInline></video>
            <canvas ref={canvasRef} id="canvasRef" width={videoWidth} height={videoHeight}/>
	        <button
	            onClick={startStream}>
	            Start webcam
	        </button>
        </div>
    );
}

export default TensorFlowComponent;