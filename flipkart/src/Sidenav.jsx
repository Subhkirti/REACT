import './Sidenav.css'
function Sidenav(){
    return(
        <>
        <div className="side-nav">
            <div className="head">
            <h2>Filters</h2>
            </div>
            <hr />
            <div className="content">
                <h5>CATEGORIES</h5>
                <select>
                    <option>Clocks</option>
                    <option>Wall Clocks</option>
                    <option>Table Clocks</option>
                </select>
            </div>
            <hr />
            <div className="price">
                <h5>PRICE</h5>
                <input type="range" min="1" max="100"/>
            </div>
            <hr />
            <div className="brand">
                <h5>BRAND</h5>
                <input type="checkbox" /> Mi
                <br />
                <input type="checkbox" /> Realme
                <br />
                <input type="checkbox" /> Oppo
            </div>
            <hr />
            <div className="ratings">
                <h5>CUSTOM RATINGS</h5>
                <input type="checkbox" />  4 ⭐ & above
                <br />
                <input type="checkbox" />  3 ⭐ & above
                <br />
                <input type="checkbox" />  2 ⭐ & above
                <br />
                <input type="checkbox" />  1 ⭐ & above
               
            </div>
            <div className="ratings">
                <h5>CUSTOM RATINGS</h5>
                <input type="checkbox" />  4 ⭐ & above
                <br />
                <input type="checkbox" />  3 ⭐ & above
                <br />
                <input type="checkbox" />  2 ⭐ & above
                <br />
                <input type="checkbox" />  1 ⭐ & above
               
            </div>
            <div className="ratings">
                <h5>CUSTOM RATINGS</h5>
                <input type="checkbox" />  4 ⭐ & above
                <br />
                <input type="checkbox" />  3 ⭐ & above
                <br />
                <input type="checkbox" />  2 ⭐ & above
                <br />
                <input type="checkbox" />  1 ⭐ & above
               
            </div>
            <div className="ratings">
                <h5>CUSTOM RATINGS</h5>
                <input type="checkbox" />  4 ⭐ & above
                <br />
                <input type="checkbox" />  3 ⭐ & above
                <br />
                <input type="checkbox" />  2 ⭐ & above
                <br />
                <input type="checkbox" />  1 ⭐ & above
               
            </div>
        </div>
        </>
    )
}
export default Sidenav;