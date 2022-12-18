import { ObjectMap, useLoader } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

interface ExternalModelComponentProps {
    position: number[],
}

/**
 * returns a component with model loaded and model object, with which one can
 * manipulate the model inside of a scene. 
 * Note: only usable inside client components.
 * 
 */
const useExternalModelControls =
    (link: string): [(props: ExternalModelComponentProps) => JSX.Element, GLTF & ObjectMap] => {

        useEffect(() => console.log("help"), []);
        const model = useLoader(GLTFLoader, link);

        return ([(props: ExternalModelComponentProps) =>
            <primitive object={model.scene} position={props.position} />
            , model
        ]);
    };


export default useExternalModelControls;