import { useState, useCallback } from 'react'
// import reactLogo from './assets/react.svg'
import Rock from '../public/images/rock-hand.svg'
import Scissor from '../public/images/scissors-hand.svg'
import Paper from '../public/images/paper-hand.svg'
import Vs from '../public/images/vs.svg'
import Search from '../public/images/search-outline.png'
// import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [winner, setWinner] = useState("")
  const [user, setUser] = useState("")
  const [computer, setComputer] = useState("")
  const [userChoose, setUserChoose] = useState(Search)
  const [computerChoose, setComputerChoose] = useState(Search)
  let temp;
  let ComputerMove;
  let Decision;

  const computerMove = useCallback((UserMove) => {
    setUserChoose(UserMove)
    temp = Math.random() * 3;
    if (temp < 1) {
      ComputerMove = Rock;
      setComputer("Rock")
    } else if (temp < 2) {
      ComputerMove = Scissor;
      setComputer("Scissor")
    } else {
      ComputerMove = Paper;
      setComputer("Paper")
    }
    setComputerChoose(ComputerMove)

    if (UserMove == ComputerMove) {
      Decision = "Tie"
    } else if (UserMove == Rock && ComputerMove == Scissor) {
      Decision = "Win"
    } else if (UserMove == Rock && ComputerMove == Paper) {
      Decision = "Lose"
    } else if (UserMove == Paper && ComputerMove == Scissor) {
      Decision = "Lose"
    } else if (UserMove == Paper && ComputerMove == Rock) {
      Decision = "Win"
    } else if (UserMove == Scissor && ComputerMove == Paper) {
      Decision = "Win"
    } else if (UserMove == Scissor && ComputerMove == Rock) {
      Decision = "Lose"
    }

    setWinner(`You ${Decision}`)


    UserMove;
    ComputerMove;
  }, [setUserChoose])



  return (
    <>
      <div className=' h-[100vh] w-[100vw] bg-red-150 flex flex-col justify-center items-center gap-[50px] bg-slate-400'>
        <div className='flex flex-row justify-center items-center gap-[25px]'>
          <div className='bg-red-300 w-[220px] h-[280px] rounded-lg p-[15px] border-4 border-black flex flex-col justify-around items-center'>
            <img src={userChoose} alt="user" />
            <div className='text-center text-[30px]  pt-2'>{user}</div>
            </div>
          <div className='bg-gray-300 w-[80px] h-[80px] rounded-lg p-[10px] border-2 border-black'>
            <img src={Vs} alt="vs" />
            </div>
          <div className='bg-blue-300 w-[220px] h-[280px] rounded-lg p-[15px] border-4 border-black flex flex-col justify-around items-center'>
            <img src={computerChoose} alt="computer" />
            <div className='text-center text-[30px]  pt-2'>{computer}</div>
            </div>
        </div>
        <div className='flex flex-row justify-center items-center'>
          <div className='text-[55px] h-[100px]' id='Winner'> {winner} </div>
        </div>
        <div className='flex flex-row justify-center items-center gap-[40px]'>
          <div className='bg-red-300 w-[210px] h-[270px] rounded-lg p-[15px] hover:scale-105 border-4 border-red-300 hover:transition-all hover:border-4 hover:border-blue-600 active:bg-blue-400'
            onClick={() => {setUser("Rock") 
              computerMove(Rock)
            }}>
            <img src={Rock} alt="rock" />
            <div className='text-center text-[30px] pt-7'>Rock</div>
          </div>
          <div className='bg-red-300 w-[210px] h-[270px] rounded-lg p-[15px] hover:scale-105 border-4 border-red-300 hover:transition-all hover:border-4 hover:border-blue-600 active:bg-blue-400'
            onClick={() => {setUser("Scissor") 
              computerMove(Scissor)
            }}>
            <img src={Scissor} alt="scissor" />
            <div className='text-center text-[30px]  pt-7'>Scissor</div>
          </div>
          <div className='bg-red-300 w-[210px] h-[270px] rounded-lg p-[15px] hover:scale-105 border-4 border-red-300 hover:transition-all hover:border-4 hover:border-blue-600 active:bg-blue-400'
            onClick={() => {setUser("Paper") 
              computerMove(Paper)
            }}>
            <img src={Paper} alt="paper" />
            <div className='text-center text-[30px]  pb-2'>Paper</div>
          </div>
        </div>
        <div className='flex flex-row justify-center items-center'></div>
      </div>
    </>
  )
}

export default App
