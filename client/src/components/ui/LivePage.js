import React from 'react'
import TensorFlowComponent from '../tensorflow/TensorFlowComponent';
import MotivationComponent from '../tensorflow/MotivationComponent';
import './LivePage.css';
import { useState, } from 'react';

export default function LivePage() {    

    return (
        <>
            <div class="tensorflow-container">
                <TensorFlowComponent />
            </div>
            <MotivationComponent />
        </>
    );
}