import React, {useState} from 'react';
import UserDetals from '../UserDetals/UserDetals';
import UsersList from '../info/UsersList';

const App = () => {

  const [blackTheme, setBlackTheme] = useState(false)

  const styles = {
    color: blackTheme ? "#fff" : "#000",
    backgroundColor: blackTheme ? "#000" : "#fff"
  }

    return (
    <div className='App' style={styles}>

        <UsersList/><hr/>
        <UserDetals/><hr/>
        <button  onClick={() => setBlackTheme((state) => !state)}>
        Change Theme
      </button>
    </div>
  )
}

export default App;
