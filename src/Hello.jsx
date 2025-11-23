import './App.css'

function Hello(){
    const name = " Yahoo Baba"
        const Style = {
            color: "white",
            fontSize: 20,
            border: 10,
            backgroundColor: "Green",
            padding: 10
        };
    return <h2 style={Style}>Hello{name}</h2>
}
export default Hello
