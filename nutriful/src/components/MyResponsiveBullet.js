import { ResponsiveBullet } from '@nivo/bullet'

const MyResponsiveBullet = ({ data /* see data tab */ }) => (
    <ResponsiveBullet
        data={data}
        margin={{ top: 50, right: 20, bottom: 50, left: 190 }}
        spacing={40}
        titleAlign="end"
        titleOffsetX={-10}
        measureSize={0.3}
        rangeColors="yellow_green"
    />
)

export default MyResponsiveBullet