import { styled } from '@mui/system';
import { Box, Paper, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow } from "@mui/material"

function createData(
    name: string,
    value: number[]
) {
    return { name, value };
}

const rows = [
    createData('سایز آمریکای', [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5]),
    createData('سایز اروپایی', [39, 39, 40, 40.5, 41, 41.5, 42, 42.5, 43, 43.5]),
    createData('سایز انگلستانی', [5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10]),
    createData('اینچ', [9.25, 9.5, 9.625, 9.75, 9.9375, 10.125, 10.25, 10.5, 10.625, 10.75]),
    createData("سانتی متر", [23.5, 24.1, 24.4, 24.8, 25.4, 25.7, 26, 26.7, 27, 27.3]),
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));
const Size = () => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell sx={{ fontWeight: 900 }} component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            {row.value.map((num) => (
                                <StyledTableCell align="center">{num}</StyledTableCell>
                            ))}
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
export default Size