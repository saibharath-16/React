import React, { useState } from 'react';
import './ChatApp.css';

const ChatApp = () => {
    const [user1, setUser1] = useState('');
    const [user2, setUser2] = useState('');
    const [user1data, setUser1data] = useState([]); 
    const [user2data, setUser2data] = useState([]);

    const senduser1 = () => {
        {
            setUser1data([...user1data, user1]);
            setUser2data([...user2data, `User 1: ${user1}`]);
            setUser1('');
        }
    };

    const senduser2 = () => {
         {
            setUser2data([...user2data, user2]);
            setUser1data([...user1data, `User 2: ${user2}`]);
            setUser2('');
        }
    };

    return (
        <div className='chatapp'>
            <div className='user'>
                <div className='userinput'>
                    <label className='userlabel'>User 1</label>
                    <input 
                        className='userinputtag' 
                        type='text' 
                        value={user1} 
                        onChange={(e) => setUser1(e.target.value)} 
                    />
                    <button className='userbtn' onClick={senduser1}>Send</button>
                </div>
            </div>

            <div className='user'>
                <div className='userinput'>
                    <label className='userlabel'>User 2</label>
                    <input 
                        className='userinputtag' 
                        type='text' 
                        value={user2} 
                        onChange={(e) => setUser2(e.target.value)} 
                    />
                    <button className='userbtn' onClick={senduser2}>Send</button>
                    
                </div>
            </div>
            <div className='userdatacontainer'>
                {user1data.map((msg, index) => (
                    <div key={index} className='userdatacontent'>
                    {msg}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChatApp;
