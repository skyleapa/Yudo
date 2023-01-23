import * as poseDetection from '@tensorflow-models/pose-detection';
import '@tensorflow/tfjs-backend-webgl';
import React, { useState, useRef, useEffect, useContext } from 'react';
import Nodes from './Nodes';
import "./CameraStyle.css";
import ScoringComponent from './ScoringComponent';
import MotivationComponent from './MotivationComponent';

const TensorFlowComponent = () => {
    const [stream, setStream] = useState(null);
    const [score, setScore] = useState(null);
    const [scoreArray, setScoreArray] = useState([]);
    
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
            let normalizedKeys = poseDetection.calculators.keypointsToNormalizedKeypoints(poses, webcamVideo.current);

            //console.log(poses[0]);
            if (normalizedKeys[0]) {
                const streamScore = ScoringComponent(normalizedKeys[0]);
                setScore(streamScore.toFixed(2));
                setScoreArray((prevScoreArray) => [...prevScoreArray, streamScore])
                // console.log(normalizedKeys[0])
            }
            ctx.clearRect(0, 0, 640, 480);

            if (poses[0]) {
                 Nodes(ctx, poses[0]);
            }    
            requestAnimationFrame(render);
        }
        
        render();
    };

    return (
        <>
            <div className='tensorflow-container'>
                <div className="container">
                    <video ref={webcamVideo} id="webCamVideo" autoPlay playsInline></video>
                    <canvas ref={canvasRef} id="canvasRef" width={videoWidth} height={videoHeight}/>
                </div>
            </div>
        
            <div class="arg">
                <div class="modified-container-lp">
                    <button class="modified-button-lp">
                        <div class="title-description-dp">
                        Score: {score}
                        </div>
                    </button>
                </div>

                <button class = "peepee" onClick={() => startStream()}>
                    Start webcam
                </button>
            </div>
            <MotivationComponent parentScore={score} />
        </>
    );
}

export default TensorFlowComponent;