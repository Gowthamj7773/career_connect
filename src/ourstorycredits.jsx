function Credit(props){
    return(
        <div className="creditMain">
            <div style={{width:"auto"}}>
                <img src={props.img} style={{width:"150px", height:"150px",borderRadius:"50%"}}/>
            </div>
            <div style={{marginLeft:"10px"}} className="about">
                <h2 style={{color:"white"}}>{props.name}</h2>
                <h4 style={{color:"goldenrod"}}>{props.position}</h4>
                <p style={{color:"rgb(195, 191, 191)"}}>{props.about}</p>
            </div>
        </div>
    )
}

export default Credit