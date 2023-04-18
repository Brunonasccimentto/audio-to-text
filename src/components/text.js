

export default function Text({response}){
    return(
        <div className="fieldText">
            <h2>Transcrição do audio</h2>
            <p> {response} </p>
        </div>
    )
}