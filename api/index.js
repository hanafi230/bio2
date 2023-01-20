import express from "express";

const app = express();

app.use(express.json());

app.use(express.static("publik"));

const bio = {
    nama :['Nama',':','Hanafi Abdullah'],
    alamat :['Alamat',':','Seneng, Pakang, Andong, Boyolali'],
    hobi :['Hobi',':','Voli']
};

app.get("/api/biodata",(rq,rs)=>{
    rs.send(bio);
});

app.listen(3000,()=>{
    console.log("Server Berjalan ");
})
