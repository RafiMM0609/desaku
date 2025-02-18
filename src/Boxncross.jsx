import { useState } from "react";

function Boxncross() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);
    const [usr, setUser] = useState(0);

    function handleClick(index) {
        if (board[index] !== null) return;

        const newBoard = [...board];
        newBoard[index] = isXNext ? "X" : "O";
        setBoard(newBoard);
        setIsXNext(!isXNext);

        function checkWin(a,b,c){
            const aa = newBoard[a];
            const bb = newBoard[b];
            const cc = newBoard[c];
            if(aa===bb & bb===cc & aa!=null){
                console.log("OKEE")
                alert("You win");
                window.location.reload();
            }
        }
        checkWin(0,1,2);
        checkWin(0,3,6);
        checkWin(2,5,8);
        checkWin(6,7,8);
    }
    return(
        <>
        <div className="w-130 h-130 flex flex-row border-2 justify-center items-center">
            <div className="w-40 h-118 flex flex-col items-center justify-center">
                <div id="col0" className="w-40 h-40 flex flex-col items-center justify-center border-2"
                    onClick={()=>handleClick(0)}
                >
                    <p className="text-9xl">{board[0]}</p>
                </div>
                <div id="col1" className="w-40 h-40 flex flex-col items-center justify-center border-2"
                    onClick={()=>handleClick(1)}
                >
                    <p className="text-9xl">{board[1]}</p>
                </div>
                <div id="col2" className="w-40 h-40 flex flex-col items-center justify-center border-2"
                    onClick={()=>handleClick(2)}
                >
                    <p className="text-9xl">{board[2]}</p>
                </div>
            </div>
            <div className="w-40 h-118 flex flex-col items-center justify-center">
                <div id="col3" className="w-40 h-40 flex flex-col items-center justify-center border-2"
                    onClick={()=>handleClick(3)}
                >
                    <p className="text-9xl">{board[3]}</p>
                </div>
                <div id="col4" className="w-40 h-40 flex flex-col items-center justify-center border-2"
                    onClick={()=>handleClick(4)}
                >
                    <p className="text-9xl">{board[4]}</p>
                </div>
                <div id="col5" className="w-40 h-40 flex flex-col items-center justify-center border-2"
                    onClick={()=>handleClick(5)}
                >
                    <p className="text-9xl">{board[5]}</p>
                </div>
            </div>
            <div className="w-40 h-118 flex flex-col items-center justify-center">
                <div id="col6" className="w-40 h-40 flex flex-col items-center justify-center border-2"
                    onClick={()=>handleClick(6)}
                >
                    <p className="text-9xl">{board[6]}</p>
                </div>
                <div id="col7" className="w-40 h-40 flex flex-col items-center justify-center border-2"
                    onClick={()=>handleClick(7)}
                >
                    <p className="text-9xl">{board[7]}</p>
                </div>
                <div id="col8" className="w-40 h-40 flex flex-col items-center justify-center border-2"
                    onClick={()=>handleClick(8)}
                >
                    <p className="text-9xl">{board[8]}</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Boxncross;