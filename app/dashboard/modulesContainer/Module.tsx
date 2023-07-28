import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";


export default function Module(props: any){
    console.log("xxxx")
    console.log(props)
    return(
            <HighchartsReact
                containerProps={{style: {height: '100%', weight: '100%'}}}
                highcharts={Highcharts}
                options={props.moduleData.content}
            />
    )

}
