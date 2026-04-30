            class Header {
                constructor() {
                    this.message ="Button Clicked";
                }
                handleClick = () => {
                    alert(this.message);
              }
            }
     function App()
     {
      const btn = new Header();
      return(
        <div> 
          <button onClick = {btn.handleClick}>CLICK ME!</button>
        </div>
      );
     }
     export default App;