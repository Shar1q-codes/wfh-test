import React from 'react'
import './ArtifactsStyles.css'
import durga from '../../Images/durga.jpg'
import saraswati from '../../Images/saraswati.jpg'
import vishnu from '../../Images/vishnu.jpg'
import party from '../../Images/party.png'

const Artifacts = () => {
  return (
    <div className='artifacts-container'>
        <div className="search-section">
            <div className="search-options">
                <div className="search-bar">
                 <input type="search" placeholder="Search from the world's antique collection"/>
            </div>
           <hr />
           <button> <i className="fa-sharp fa-solid fa-filters"></i> FILTERS</button>
            </div>
            <div className="surprise">
               <img src={party} alt="" className='party'/> <p>Surprise Me</p>
            </div>
            
        </div>
        <hr />
        <div className="sort-section">
            <div className="sort-icons">
                <i className='fas fa-bars'></i>
                <i className='fas fa-table-cells'></i>
            </div>
            <div className="sort-list">
                <label htmlFor="sort"> <i className='fas fa-sort'></i> Sort By: </label>
                <select id='sort'>

                    <option value="ascend">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
            </div>
        </div>

        <div className="artifacts">
            <div className="artifact-container">
                <div className="img-container">
                    <img src={durga} alt="" />
                </div>
                <div className="title-price">
                    <p>Durga</p>
                    <p>1300 CE</p>
                </div>
                <hr />
                <div className="description">
                    <p>Durga is a symbol of knowledge and wisdom. Knowledge is supremely alluring</p>
                </div>
            </div>
            <div className="artifact-container">
                <div className="img-container">
                    <img src={vishnu} alt="" />
                </div>
                <div className="title-price">
                    <p>Vishnu</p>
                    <p>1300 CE</p>
                </div>
                <hr />
                <div className="description">
                    <p>Vishnu is a symbol of knowledge and wisdom. Knowledge is supremely alluring</p>
                </div>
            </div>
            <div className="artifact-container">
                <div className="img-container">
                    <img src={saraswati} alt="" />
                </div>
                <div className="title-price">
                    <p>Saraswati</p>
                    <p>1300 CE</p>
                </div>
                <hr />
                <div className="description">
                    <p>Saraswati is a symbol of knowledge and wisdom. Knowledge is supremely alluring</p>
                </div>
            </div>
            <div className="artifact-container">
                <div className="img-container">
                    <img src={durga} alt="" />
                </div>
                <div className="title-price">
                    <p>Durga</p>
                    <p>1300 CE</p>
                </div>
                <hr />
                <div className="description">
                    <p>Durga is a symbol of knowledge and wisdom. Knowledge is supremely alluring</p>
                </div>
            </div>
            <div className="artifact-container">
                <div className="img-container">
                    <img src={vishnu} alt="" />
                </div>
                <div className="title-price">
                    <p>Vishnu</p>
                    <p>1300 CE</p>
                </div>
                <hr />
                <div className="description">
                    <p>Vishnu is a symbol of knowledge and wisdom. Knowledge is supremely alluring</p>
                </div>
            </div>
            <div className="artifact-container">
                <div className="img-container">
                    <img src={saraswati} alt="" />
                </div>
                <div className="title-price">
                    <p>Saraswati</p>
                    <p>1300 CE</p>
                </div>
                <hr />
                <div className="description">
                    <p>Saraswati is a symbol of knowledge and wisdom. Knowledge is supremely alluring</p>
                </div>
            </div>
            <div className="artifact-container">
                <div className="img-container">
                    <img src={durga} alt="" />
                </div>
                <div className="title-price">
                    <p>Durga</p>
                    <p>1300 CE</p>
                </div>
                <hr />
                <div className="description">
                    <p>Durga is a symbol of knowledge and wisdom. Knowledge is supremely alluring</p>
                </div>
            </div>
            <div className="artifact-container">
                <div className="img-container">
                    <img src={vishnu} alt="" />
                </div>
                <div className="title-price">
                    <p>Vishnu</p>
                    <p>1300 CE</p>
                </div>
                <hr />
                <div className="description">
                    <p>Vishnu is a symbol of knowledge and wisdom. Knowledge is supremely alluring</p>
                </div>
            </div>
            <div className="artifact-container">
                <div className="img-container">
                    <img src={saraswati} alt="" />
                </div>
                <div className="title-price">
                    <p>Saraswati</p>
                    <p>1300 CE</p>
                </div>
                <hr />
                <div className="description">
                    <p>Saraswati is a symbol of knowledge and wisdom. Knowledge is supremely alluring</p>
                </div>
            </div>
            <div className="artifact-container">
                <div className="img-container">
                    <img src={durga} alt="" />
                </div>
                <div className="title-price">
                    <p>Durga</p>
                    <p>1300 CE</p>
                </div>
                <hr />
                <div className="description">
                    <p>Durga is a symbol of knowledge and wisdom. Knowledge is supremely alluring</p>
                </div>
            </div>
            <div className="artifact-container">
                <div className="img-container">
                    <img src={vishnu} alt="" />
                </div>
                <div className="title-price">
                    <p>Vishnu</p>
                    <p>1300 CE</p>
                </div>
                <hr />
                <div className="description">
                    <p>Vishnu is a symbol of knowledge and wisdom. Knowledge is supremely alluring</p>
                </div>
            </div>
            <div className="artifact-container">
                <div className="img-container">
                    <img src={saraswati} alt="" />
                </div>
                <div className="title-price">
                    <p>Saraswati</p>
                    <p>1300 CE</p>
                </div>
                <hr />
                <div className="description">
                    <p>Saraswati is a symbol of knowledge and wisdom. Knowledge is supremely alluring</p>
                </div>
            </div>
            <div className="artifact-container">
                <div className="img-container">
                    <img src={saraswati} alt="" />
                </div>
                <div className="title-price">
                    <p>Saraswati</p>
                    <p>1300 CE</p>
                </div>
                <hr />
                <div className="description">
                    <p>Saraswati is a symbol of knowledge and wisdom. Knowledge is supremely alluring</p>
                </div>
            </div>
            <div className="artifact-container">
                <div className="img-container">
                    <img src={durga} alt="" />
                </div>
                <div className="title-price">
                    <p>Durga</p>
                    <p>1300 CE</p>
                </div>
                <hr />
                <div className="description">
                    <p>Durga is a symbol of knowledge and wisdom. Knowledge is supremely alluring</p>
                </div>
            </div>
            <div className="artifact-container">
                <div className="img-container">
                    <img src={vishnu} alt="" />
                </div>
                <div className="title-price">
                    <p>Vishnu</p>
                    <p>1300 CE</p>
                </div>
                <hr />
                <div className="description">
                    <p>Vishnu is a symbol of knowledge and wisdom. Knowledge is supremely alluring</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Artifacts