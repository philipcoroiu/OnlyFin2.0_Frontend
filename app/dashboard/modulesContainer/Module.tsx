import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import Link from "next/link";

type Props = { moduleData: OnlyfinModule }

export default function Module(props: Props){

    return (
        <>
            <Link href={"/studio/" + props.moduleData.id.toString()}>
                <p className={"bg-pink-400 text-black"}>Edit Module</p>
            </Link>
            <HighchartsReact
                containerProps={{style: {height: '100%', weight: '100%'}}}
                highcharts={Highcharts}
                options={props.moduleData.content}
            />
        </>
    )

}
