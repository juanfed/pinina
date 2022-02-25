import React from 'react'

export default function tablePage() {
    const [showTable, setShowTable] = useState(true);
    const [tableData, setTableData] = useState([]);
    const [tableRows, setTableRows] = useState([]);

    useEffect(() => {
        if (data.length !== 0) {
            const arrayKeys = Object.keys(data);
            const id = 0
            const arrayData = arrayKeys.map(i => {
                return {
                    id: arrayKeys.indexOf(i),
                    title: i
                }
            });
            setTableRows(arrayData)
            const arrayProps = Object.values(data);
            setTableData([
                {
                    data_0: 0,
                    data_1: arrayProps[0],
                    data_2: arrayProps[1],
                    data_3: arrayProps[2],
                    data_3: arrayProps[3]
                }
            ])
        }
    }, [data]);
    useEffect(() => {
        console.log(tableRows)
    }, [tableRows])
    return (
        <>
            {showTable &&
                <>
                    <Grid container justify='center'>
                        <Grid item >
                            <WhiteTable
                                tableData={tableData}
                                rows={tableRows}
                            />
                        </Grid>
                    </Grid>
                </>
            }
        </>
    )
};
