import React from "react";
// import { useState } from "react";
class ChildComponent extends React.Component {
    state = {
        showJobs: false,
    }
    handleShowJobs = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }
    render() {
        console.log("Check props", this.props);
        // let fullname = this.props.name;
        // let tuoi = this.props.age;
        let {arrayJob} = this.props;
        let {showJobs} = this.state;
        let check = showJobs === true ? "Show" : "Hide";
        console.log("check", check);
        return (
            <>
                {
                    showJobs === false ?
                        <div>
                            <button onClick={()=>this.handleShowJobs()}>
                                Show
                            </button>
                        </div>
                        :
                        <>
                            <div className="childList">
                                {
                                    arrayJob.map((item, index) => {
                                        // if (item.salary >= 500) {
                                            return (
                                                <div key={item.id}>
                                                    {item.title} - {item.salary} $
                                                </div>
                                            )
                                        // }
                                    })
                                }
                            </div>
                            <button onClick={()=>this.handleShowJobs()}>
                                Hide
                            </button>
                        </>
                }
            </>

        );
    }
}


//function Component
// const ChildComponent = (props) =>{
//     console.log("Check props1",props)
//     let {arrayJob} = props;
//     return (
//             <>
//                 <div className="childList">
//                     {
//                         arrayJob.map((item, index) =>{
//                             if (item.salary >= 500){
//                                 return(
//                                 <div key={item.id}>
//                                     {item.title} - {item.salary} $
//                                 </div>
//                             )
//                             }
//                         })
//                     }
//                 </div>
//             </>

//         );
// }
export default ChildComponent;