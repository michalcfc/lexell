
import {
    GridStyles
} from "./Grid.styles"

import { GridProps } from "./Grid.d"


const Grid: React.FC<GridProps> = ({
    rows,
    rowGap,
    columns, 
    gridGap,
    children, 
    columnGap,
    autoColumns,
    customMargin,
    alignItems,
    autoFlow,
    mt,
    p
}) => {
    return (
        <GridStyles
            p={p}
            mt={mt}
            rows={rows}
            rowGap={rowGap}
            gridGap={gridGap}
            columns={columns}
            alignItems={alignItems}
            customMargin={customMargin}
            columnGap={columnGap}
            autoColumns={autoColumns}
            autoFlow={autoFlow}
        >
            {children}
        </GridStyles>
    )
}

export default Grid