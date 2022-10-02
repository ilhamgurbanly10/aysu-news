import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import i18next from "i18next";
import Translation from "./Translation";



const ReduxTest = (props) => {

    const {posts} = props;

    let lan = i18next.language;
    
    return (
        posts.map((post , i)=>(
            <React.Fragment key={i}>
                <p >{post[`title_${lan}`]}</p>
                <p>{post[`text_${lan}`]}</p>
                {lan}
            </React.Fragment>
        ))

    )

}

const mapStateToProps = ({posts}) => {
    return {
        posts
    }
}

  
export default connect(mapStateToProps , null)(ReduxTest)

