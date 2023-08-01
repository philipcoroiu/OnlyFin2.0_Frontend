import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

type Props = { moduleData: OnlyfinModule }

export default function Module(props: Props){
    console.log("xxxx")
    console.log(props)
    return (
        <HighchartsReact
            containerProps={{style: {height: '100%', weight: '100%'}}}
            highcharts={Highcharts}
            options={props.moduleData.content}
        />
    )

}
