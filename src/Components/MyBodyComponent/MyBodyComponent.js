import ButtonGroupComponent from "../ButtonGroupComponent/ButtonGroupComponent";
import PostGroupComponent from "../PostGroupComponent/PostGroupComponent";

function MyBodyComponent(){
    return (
        <div className = 'myBody'>
            <PostGroupComponent></PostGroupComponent>
            <ButtonGroupComponent></ButtonGroupComponent>
        </div>
    );
}

export default MyBodyComponent;