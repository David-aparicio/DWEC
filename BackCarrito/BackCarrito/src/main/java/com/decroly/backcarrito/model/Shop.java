package com.decroly.backcarrito.model;

import java.util.ArrayList;
import java.util.List;

public class Shop
{
    private String currency;
    private List<Product> products;

    public Shop(String currency) {
        this.currency = currency;
        this.products = new ArrayList<>();
        //this.products.add(new Product("SKU","TITLE","PRICE","slug","imagen_real",ID));


        this.products.add(new Product("0K3QOSOV4V","PlayStation 5","549.99",
    "playstation5",
    "https://image.api.playstation.com/vulcan/ap/rnd/202009/1623/uJt9ZwTe74MkRUYw35vj0QeC.png",
    1));

this.products.add(new Product("1A9PLMK22B","Xbox Series X","499.99",
    "xboxseriesx",
    "https://assets.xbox.com/en-us/images/cms-image/xbox-series-x-console.png",
    2));

this.products.add(new Product("2Z7QWOT88X","Nintendo Switch OLED","349.99",
    "nintendoswitcholed",
    "https://assets.nintendo.com/image/upload/ncom/en_US/switch/site-design-update/oled-promo",
    3));

this.products.add(new Product("3M4BPAJ93C","iPhone 13 Pro","938.99",
    "iphone13pro",
    "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-max-family-hero",
    4));

this.products.add(new Product("4K8DLOQ15T","Samsung Galaxy S22","799.00",
    "galaxys22",
    "https://images.samsung.com/is/image/samsung/p6pim/es/galaxy-s22/gallery/es-galaxy-s22-s901-sm-s901bzwgeub-530164274",
    5));

this.products.add(new Product("5P1XNEH47V","MacBook Air M1","1099.00",
    "macbookairm1",
    "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-m1-hero",
    6));

this.products.add(new Product("6C3JYTU20Q","MacBook Pro 14","1899.00",
    "macbookpro14",
    "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-silver-select-202110",
    7));

this.products.add(new Product("7W9HSEU54L","Logitech MX Master 3","99.99",
    "mxmaster3",
    "https://resource.logitech.com/content/dam/logitech/en/products/mice/mx-master-3/gallery/mx-master-3-graphite-top.png",
    8));

this.products.add(new Product("8R2VJQK61P","Sony WH-1000XM5","399.00",
    "sonywh1000xm5",
    "https://www.sony.es/image/2be8bb14c8efaa765a486cdf4db88111?fmt=pjpeg",
    9));

this.products.add(new Product("9T5BLRW82G","iPad Air 5","679.00",
    "ipadair5",
    "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-air-hero",
    10));

this.products.add(new Product("A1Q2WSX93F","Google Pixel 7","649.00",
    "pixel7",
    "https://store.google.com/product/images/pixel_7_front_back.png",
    11));

this.products.add(new Product("B4N7MJU10Y","Apple Watch Series 8","459.00",
    "applewatch8",
    "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/watch-s8-selection",
    12));

this.products.add(new Product("C6V3KPL12R","Samsung Galaxy Watch 5","309.99",
    "galaxywatch5",
    "https://images.samsung.com/is/image/samsung/p6pim/es/galaxy-watch5/SM-R900NZSAEUB/gallery",
    13));

this.products.add(new Product("D7F2ZTQ34H","AirPods Pro 2","299.00",
    "airpodspro2",
    "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-pro-2nd-gen-hero",
    14));

this.products.add(new Product("E8L5MND76W","Logitech G Pro X","129.99",
    "logitechprox",
    "https://resource.logitech.com/content/dam/gaming/en/products/pro-x-wired/pro-x-gallery-1.png",
    15));

this.products.add(new Product("F9H2JQA88C","HP Pavilion 15","699.99",
    "hppavilion15",
    "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08096216.png",
    16));

this.products.add(new Product("G3L8TRE29S","Dell XPS 13","1299.00",
    "dellxps13",
    "https://i.dell.com/sites/csimages/Master_Imagery/all/xps-13-9310-laptop.jpg",
    17));

this.products.add(new Product("H5N9VPL44D","Razer BlackWidow V3","149.99",
    "blackwidowv3",
    "https://assets2.razerzone.com/images/pnx.assets/dba58f4d184ef0da8228a64a96b86c09/razer-blackwidow-v3-hero.png",
    18));

this.products.add(new Product("J2K7QSM55B","LG Ultragear 27","329.99",
    "lgultragear27",
    "https://www.lg.com/es/images/monitores/md07539559/gallery/large01.jpg",
    19));

this.products.add(new Product("K9W4PLX66M","Acer Predator Helios 300","1399.00",
    "predatorhelios300",
    "https://static.acer.com/up/Resource/Acer/Laptops/Predator_Helios_300/Images/20220310/PH315-54_Black_01.png",
    20));

this.products.add(new Product("L7Q2WEH99T","Canon EOS R6","2499.00",
    "canoneosr6",
    "https://www.canon.es/media/eos-r6_hero-image-thumb_tcm86-2002817.png",
    21));

this.products.add(new Product("M4P9SJD16U","Sony A7 IV","2799.99",
    "sonya7iv",
    "https://www.sony.es/image/8a64a96e557ec0dbde3c8127781b78b5?fmt=png-alpha",
    22));

this.products.add(new Product("N8D2LPQ77K","Nikon Z6 II","1999.00",
    "nikonz6ii",
    "https://cdn-5.nikon-cdn.com/Images/Product-Images/Camera/Nikon-Z6II/Enlarge/Z6II_hero.png",
    23));

this.products.add(new Product("P5S7OKM88L","DJI Mini 3 Pro","759.00",
    "djimini3pro",
    "https://dji-official-fe.djicdn.com/dps/1e405fe01951fbe9620f1bc5312872b1.png",
    24));

this.products.add(new Product("Q2A9BXL55N","GoPro Hero 11","449.99",
    "goprohero11",
    "https://gopro.com/content/dam/gopro/en/homepage/hero11-black/pdp-hero-11-black.png",
    25));

this.products.add(new Product("R7C5PLS22M","Nvidia RTX 3080","699.00",
    "rtx3080",
    "https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/graphic-cards/rtx-3080/gallery/geforce-rtx-3080-product-gallery-photo-001.png",
    26));

this.products.add(new Product("S9H4TQK33P","Nvidia RTX 4090","1599.00",
    "rtx4090",
    "https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ada-lovelace/rtx-4090/gallery/GeForce-RTX-4090-Product-Photo.png",
    27));

this.products.add(new Product("T2L8VRM66F","AMD Radeon RX 6800","579.00",
    "rx6800",
    "https://www.amd.com/system/files/2020-10/687403-amd-radeon-rx-6800-1260x709.png",
    28));

this.products.add(new Product("U9J3QPT44B","ASUS TUF Gaming B550","159.99",
    "tufb550",
    "https://dlcdnwebimgs.asus.com/gain/7C420C1D-39EC-438A-B0D6-EF2BD4D5F67A",
    29));

this.products.add(new Product("V5E2KRM89C","MSI MAG Z690","249.00",
    "msimagz690",
    "https://storage-asset.msi.com/global/picture/image/feature/mb/Z690/MAG-Z690-TOMAHAWK-WIFI-DDR4/gallery-01.png",
    30));

this.products.add(new Product("W3T6NYA92L","Samsung 980 Pro SSD","129.99",
    "980pro",
    "https://images.samsung.com/is/image/samsung/p6pim/global/980-pro/gallery/global-980-pro-mz-v8p1t0bw-531395344",
    31));

this.products.add(new Product("X8Q1JLF55W","WD Black SN770","119.00",
    "wdsn770",
    "https://www.westerndigital.com/content/dam/store/en-us/assets/products/internal-drives/wd-black-sn770/gallery/pc-sn770-1tb.png",
    32));

this.products.add(new Product("Y4M9TRS80Q","HyperX Cloud II","89.99",
    "hyperxcloud2",
    "https://media.kingston.com/hyperx/product/hx-product-headset-cloud-ii-red-1-md.jpg",
    33));

this.products.add(new Product("Z6D3PQA41X","Razer Kraken V3","119.99",
    "krakenv3",
    "https://assets2.razerzone.com/images/pnx.assets/74619e28c20d60462b0887491916cfbe/razer-kraken-v3-hero.png",
    34));

this.products.add(new Product("AA3W8NS88F","SteelSeries Apex Pro","199.99",
    "apexpro",
    "https://static.steelseriesimages.com/products/apex-pro/05-apex-pro-us.png",
    35));

this.products.add(new Product("BB9C4MJ11S","Samsung Odyssey G7","499.00",
    "odysseyg7",
    "https://images.samsung.com/is/image/samsung/p6pim/es/lf27g75tqsuxen/gallery/es-odyssey-g7-lc27g75tqsexen-431720180",
    36));

this.products.add(new Product("CC1V6LK02E","LG 48 OLED C2","1299.00",
    "lgoledc2",
    "https://www.lg.com/es/images/televisores/md07540296/gallery/medium01.jpg",
    37));

this.products.add(new Product("DD7H2PQ10L","ASUS Rog Phone 6","999.00",
    "rogphone6",
    "https://dlcdnwebimgs.asus.com/gain/CB577DE1-0FB2-4F9C-AC59-40C88001D041",
    38));

this.products.add(new Product("EE4K8MD99B","OnePlus 11","749.00",
    "oneplus11",
    "https://image01.oneplus.net/ebp/202301/05/1-m00-4e-0e-rb8bw2nlrwkabnf1aazn2osulda893.png",
    39));

this.products.add(new Product("FF2D5QL30W","Xiaomi 12 Pro","899.00",
    "xiaomi12pro",
    "https://i01.appmifile.com/webfile/globalimg/products/pc/xiaomi-12-pro/specs-01.png",
    40));

this.products.add(new Product("GG9P1OT11N","Samsung Galaxy Tab S8","749.00",
    "tabs8",
    "https://images.samsung.com/is/image/samsung/p6pim/global/galaxy-tab-s8/multi-gallery-tab-s8",
    41));

this.products.add(new Product("HH8Q6MR77A","iPad Pro 11","999.00",
    "ipadpro11",
    "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-pro-11-select-cell-spacegray-202204",
    42));

this.products.add(new Product("II7R3KS12Q","Apple TV 4K","169.00",
    "appletv4k",
    "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/apple-tv-4k-select-202104",
    43));

this.products.add(new Product("JJ4T9LW22V","Amazon Fire TV Stick 4K","59.99",
    "firetvstick4k",
    "https://m.media-amazon.com/images/I/41DEUlyzOdL._AC_SL1000_.jpg",
    44));

this.products.add(new Product("KK6M2BP77S","Samsung Galaxy Buds 2 Pro","239.99",
    "buds2pro",
    "https://images.samsung.com/es/galaxy-buds2-pro/sm-r510nzkgeub/gallery",
    45));

this.products.add(new Product("LL8N5TD34R","JBL Charge 5","179.99",
    "jblcharge5",
    "https://www.jbl.com/on/demandware.static/-/Sites-masterCatalog/default/dw535e9024/charge_5_black_1.png",
    46));

this.products.add(new Product("MM1S8KQ66F","Sony SRS-XG300","299.99",
    "sony-xg300",
    "https://www.sony.es/image/0138e28c6826d763e52bbe723a2f1030?fmt=png-alpha",
    47));

this.products.add(new Product("NN2B4PL98W","GoPro Max 360","499.00",
    "gopromax",
    "https://gopro.com/content/dam/gopro/en/homepage/max/hero/max_360_1.png",
    48));

this.products.add(new Product("OO7E9CS33B","DJI Osmo Pocket 2","349.00",
    "osmopocket2",
    "https://dji-official-fe.djicdn.com/dps/015e8d53c3eab6f20dd0a68d7f27e841.png",
    49));

this.products.add(new Product("PP3Q6ZM22X","Nvidia Shield TV","149.99",
    "nvidiashield",
    "https://www.nvidia.com/content/dam/en-zz/Solutions/shield/shield-tv-2019/gallery/shieldtv-2-medium.png",
    50));

        }

    public String getCurrency()
    {
        return currency;
    }

    public List<Product> getProducts()
    {
        return products;
    }
}
