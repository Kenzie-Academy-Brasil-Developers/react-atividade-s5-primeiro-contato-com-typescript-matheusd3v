import { useState } from 'react';
import Card from './components/Card';
import Input from './components/Input';
import { ContainerCards, ContainerPage, FormCards } from './style';

interface User {
  name: string;
  age: number;
  hobby: string;
}

function App() {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [hobby, setHobby] = useState<string>("");
  const [users, setUsers] = useState<User[]>([] as User[])

  const handleSubmit = (name: string, age: number, hobby: string) => {
    const person = { name, age, hobby };
    setUsers([...users, person])
    setName('')
    setAge(0)
    setHobby('')
  }

  const cleanList = () => {
    setUsers([])
  }

  return (
    <ContainerPage>
      <FormCards >
        <Input value={name} label='Name' placeholder='name' onChange={(e) => setName(e.target.value)} />
        <Input value={age} label='Age' placeholder='age' onChange={(e) => setAge(Number(e.target.value))} />
        <Input value={hobby} label='Hobby' placeholder='hobby' onChange={(e) => setHobby(e.target.value)} />
        <button onClick={() => handleSubmit(name, age, hobby) } >Enviar</button>
        <button onClick={cleanList} >Limpar Lista</button>
      </FormCards>

      <ContainerCards>
          {users.map((el, i) => (
            <li key={i}>
                <Card name={el.name} age={el.age} hobby={el.hobby} />
            </li>
          ))}
      </ContainerCards>
    </ContainerPage>
  );
}

export default App;
