import './App.css';
import Avatar from './component/Avatar';
import Profile from './component/Profile';

function AppProfile() {
  const handelClick = (e) =>{
    console.log(e);
    alert('alert 클릭')
  }
  return (
    <>
    <button onClick={handelClick}>버튼</button>
    <Avatar images='https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80'
    isNew={true}/>
    <Profile images='https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80'
    name='Kim' title='프론트엔드 개발자' isNew={true}/>
    <Profile images='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80'
    name='Song' title='백엔드 개발자' isNew={true} />
    <Profile images='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80'
    name='Park' title='디자이너' isNew={false}  />
    </>
  );
}

export default AppProfile;
