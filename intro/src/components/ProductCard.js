import React from "react";

function ProductCard() {
    return (
        <section className="container-product-card">
            <div className="title-product-card"></div>
            <div className="content-product-card">
                <div className="image-product-card"></div>
                <div className="description-product-card">
                    <table>
                        <tr>
                            <th>Артикул</th>
                            <td>2</td>
                        </tr>
                        <tr>
                            <th>Производитель</th>
                            <td>2</td>
                        </tr>
                        <tr>
                            <th>Цвет</th>
                            <td>2</td>
                        </tr>
                        <tr>
                            <th>материалы</th>
                            <td>2</td>
                        </tr>
                        <tr>
                            <th>Сезон</th>
                            <td>2</td>
                        </tr>
                        <tr>
                            <th>Повод</th>
                            <td>2</td>
                        </tr>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default ProductCard;