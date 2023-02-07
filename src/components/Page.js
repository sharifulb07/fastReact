import React from "react";
function WarningBanner(props){
    if(!props.warn){
        return null;
    }

    return(
        <div className="warning">
            Warning?
        </div>
    )
}

class Page extends React.Component{
    constructor(props){
        super(props);
        this.state={showWarning:true};
        this.handleToggle=this.handleToggle.bind(this);
    }

    handleToggle(){
        this.setState(state=>({
            showWarning:!state.showWarning
        }))
    }

    render(){
        return(
            <div>

                <WarningBanner warn={true}/>

                <button onClick={this.handleToggle}>{this.state.showWarning?"Hide":"Show"} </button>
            </div>

        )
    }
}

export default Page;