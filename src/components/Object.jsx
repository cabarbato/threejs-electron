import React, { useRef } from "react";
import { useLoader , useFrame} from "@react-three/fiber";
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
//import * as THREE from "three";
import katsura from "../assets/obj/katsura.obj";

const Object = (props) => {
  const mesh = useRef(),
    obj = useLoader(OBJLoader, katsura)

    useFrame(() => {
      if (props.rotate) mesh.current.rotation.y = mesh.current.rotation.y += props.rotate / 100;
    });
    
  return <mesh
  {...props}
  ref={mesh}
    >
    <primitive object={obj} />
    </mesh>

}

export default Object;