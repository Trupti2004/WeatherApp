import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox({info}) {

    //const INIT_URL = "https://tse2.mm.bing.net/th/id/OIP.p5tzHL5GmdThLYGkchVITAHaFx?pid=Api&P=0&h=180";

    const HOT_URL = "https://tse1.mm.bing.net/th/id/OIP.EQp9ucyQluDItl2dcX4yJwHaE8?pid=Api&P=0&h=180";
    const COLD_URL = "https://tse3.mm.bing.net/th/id/OIP.s3YdllkFVG3fialT8mUP9gHaE8?pid=Api&P=0&h=180";
    const RAIN_URL = "https://tse2.mm.bing.net/th/id/OIP.YdXTbFM3Iy2OHEPXeFziRwHaE7?pid=Api&P=0&h=180";

    return(
        <div className="InfoBox">
        <h2>Weather Info - {info.weather}</h2>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
        title="dusty weather"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <p>Temperature = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Min Temp = {info.tempMin}&deg;C</p>
          <p>Max Temp = {info.tempMax}&deg;C</p>
          <p>The Weather is {info.weather} feels like {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
        </div>
    )
}