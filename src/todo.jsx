export default function Todo({ task ,isDone}) {
  if(isDone){
    return <li>Finished:{task}</li>
  } else{
    <li>Work On:{task}</li>
  }
}
