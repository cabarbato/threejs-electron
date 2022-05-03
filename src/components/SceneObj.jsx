import React, { useRef } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import katsura from "../assets/obj/katsura.obj";
import { connect } from "react-redux";
import { dragScene } from "../features/sceneSlice";

const mapDispatchToProps = dispatch => ({
  onDragScene: e => dispatch(dragScene(e))
})

const SceneObj = ({ scene, onDragScene }) => {
  const mesh = useRef(null),
    obj = useLoader(OBJLoader, katsura)

  useFrame(() => {
    if (scene) mesh.current.rotation.y = mesh.current.rotation.y += scene.rotate[1] / 100;
  });

  return <mesh
    {...scene}
    ref={mesh}
    
  >
    <primitive object={obj} />
  </mesh>

}

//export default connect(null, mapDispatchToProps)(SceneObj);
export default SceneObj;