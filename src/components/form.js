

export default function Form({convert}) {

    return (
        <>
            <form method="POST">

                <div className="field">
                    <p> para comprimir um arquivo acesse: <a href="https://www.youcompress.com/" target="_blank"> comprimir arquivo.</a></p> 
                </div>

                <div className="field">
                    <p> Se preferir, utilizar o site: <a href="https://webcaptioner.com/captioner/" target="_blank">https://webcaptioner.com/captioner/</a> permite audios maiores que <b>1MB.</b></p> 
                </div>

                <div className="field">
                    <input id="file" className="input" type="file" name="audio" />
                    <label htmlFor="file" className="label">transcrever arquivo</label>
                    <span className="bar"></span>
                </div>

                <button className="submitbutton" onClick={convert}>Transcrever </button>
            </form>

        </>

    )
}