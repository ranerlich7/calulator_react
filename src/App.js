import "./calc.css";

function App() {
  return (
    <>
      <div class="calc-body">
        {/* <!-- Calculator Display Screen --> */}
        <div class="calc-screen">
          <div id="calc-operation"></div>
          <div id="calc-typed">0</div>
        </div>

        {/* <!-- Calculator Buttons --> */}
        <div class="calc-button-row">
          <button onclick="myclear()" class="ac">
            AC
          </button>
          <button class="opt">&#43;&#47;&#8722;</button>
          <button class="opt">&#37;</button>
          <button class="opt">&#247;</button>
          <button onclick="myclick()">7</button>
          <button onclick="myclick()">8</button>
          <button onclick="myclick()">9</button>
          <button class="opt">&#215;</button>
          <button onclick="myclick()">4</button>
          <button onclick="myclick()">5</button>
          <button onclick="myclick()">6</button>
          <button class="opt">&#8722;</button>
          <button onclick="myclick()">1</button>
          <button onclick="myclick()">2</button>
          <button onclick="myclick()">3</button>
          <button onclick="myplus()" class="opt">
            +
          </button>
          <button onclick="myclick()">0</button>
          <button onclick="dotclick()">.</button>
          <button>&#9003;</button>
          <button onclick="calcEquals()" class="opt">
            =
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
