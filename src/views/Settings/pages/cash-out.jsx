import React,{useState} from "react";
import SoloModalCashOut from "../../../components/SoloModal/SoloModal-cashout.component";

const CashOut=()=>{
    const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};
    const onClose = () => {
		setOpen(false);
	};
    return(<>
    <h1>
       How to Cash Out
    </h1>
    <div className="cash-text">
    The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz.
    </div>
    <SoloModalCashOut open={open} setOpen={handleOpen} onClose={onClose} />
    <button className='cash'   onClick={handleOpen}>
    Cash out
	</button>
    </>)
}
export default CashOut;