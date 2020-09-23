import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img className="home__image" 
                src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg"
                alt="banner"
            />
            {/* Prod ID, title, price, rating, image */}
            <div className="home__row">
            <Product 
                id="1"
                title="Lenovo Ideapad Slim 3i 10th Gen Intel Core i5 15.6 inch FHD Thin and Light Laptop (8GB/1TB/Windows 10/MS Office/Grey/1.85Kg), 81WE004WIN"
                price={129.99}
                rating={5}
                image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/CEPC/Covid19/Dashboard/WFH2_GW_DC_379x304._SY304_CB431287285_.jpg"
                />
                <Product 
                id="2"
                title="Panasonic 1 Ton 3 Star Wi-Fi Inverter Split AC (Copper CS/CU-SU12WKYW White)"
                price={149.00}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/71gEUnI48qL._SX679_.jpg"
                />
            </div>
            <div className="home__row">
            <Product 
                id="3"
                title="Haier 195 L 4 Star Direct-Cool Single-Door Refrigerator (HED- 20CFDS, Dazzle Steel)"
                price={49.00}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/71NfnIdXAbL._SX679_.jpg"
                />
                <Product 
                id="4"
                title="Wakefit Orthopaedic Memory Foam Mattress, King Bed Size (78x72x8)"
                price={249.00}
                rating={3}
                image="https://images-na.ssl-images-amazon.com/images/I/61nedBqescL._SX679_.jpg"
                />
                 <Product 
                id="5"
                title="Amazon Brand - Solimo Musca Single Seater Fabric Recliner (Chocolate)"
                price={199.00}
                rating={2}
                image="https://images-na.ssl-images-amazon.com/images/I/81Du4NwnDnL._SX679_.jpg"
                />
            </div>
            <div className="home__row">
            <Product 
                id="6"
                title="Mi TV 4X 138.8 cm (55 Inches) Ultra HD Android LED TV (Black)"
                price={99.99}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/81Yy5UF05tL._SX522_.jpg"
                />
            </div>
            {/* Product */}
        </div>
    )
}

export default Home
