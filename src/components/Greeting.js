const format = (user) => `${user.firstName} ${user.lastName}`;

const Greeting = (props) => {
    return <h1>Hello, {format(props.user)}!</h1>;
};

export default Greeting;

// 時鐘
// 圖片
// 圖片+圖片說明