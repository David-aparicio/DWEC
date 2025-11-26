package com.decroly.backcarrito.model;

public class Product
{
    private int id;
    private String SKU;
    private String title;
    private String price;
    private String url;
    private String imagen;

    Product(String SKU, String title, String price, String url, String imagen, int id) {
        this.SKU = SKU;
        this.title = title;
        this.price = price;
        this.url = url;
        this.imagen = imagen;
        this.id = id;
    }

    public String getSku() {
        return SKU;
    }

    public String getTitle() {
        return title;
    }

    public String getPrice() {
        return price;
    }

    public String getUrl() {
        return url;
    
    }
    public String getImagen() {
        return imagen;
    }
    public int getId() {
        return id;
    }
}