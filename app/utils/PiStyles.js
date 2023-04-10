const PiStyles = {



    layouts: {
        container: {
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
            fontFamily: 'Quicksand-Regular',

        },
    },
    color: {
        COLOR_PRIMARY: '#f45d0e',
        COLOR_SECONDARY: '#c4b8ab',
        COLOR_GRAY: '#78909C',
        COLOR_BG: '#FFFFFF',
        COLOR_DISCOUNT: '#9C27B0',
        COLOR_01: '#f5bda4',
        COLOR_02: '#fd3a69',
        COLOR_03: '#fecd1a',
        COLOR_04: '#892cdc',
        LIME: '#D4E157',
        PURPLE0: '#F3E5F5',
        PUPRPLE4: '#AB47BC',
        PUPRPLE3: '#BA68C8'
    },

    appHeader: {
        serviceHead: {
            fontFamily: 'Quicksand-Bold',
            fontSize: 16
        }
    },

    space: { paddingVertical: 8 },
    container: {
        fontFamily: 'Quicksand-Regular',

        rowView: {
            flexDirection: "row",
        },
        colView: {
            flexDirection: "column"
        },
        catCardContainer: {
            margin: 10,
            fontFamily: 'Quicksand-Regular',
        },
    },
    padding: {
        sp10: { padding: 10 },
        mg10: { margin: 10 },

    },

    typo: {
        fs12: { fontSize: 12 },
        fs12b: { fontSize: 10, fontFamily: 'Quicksand-Bold' },
        fs14: { fontSize: 14, lineHeight: 24 },
        fs14b: { fontSize: 14, fontFamily: 'Quicksand-Bold' },
        fs16: { fontSize: 16 },
        fs16b: { fontFamily: 'Quicksand-Bold', fontSize: 16 },
        fs18: { fontSize: 18 },
        fs20: { fontSize: 20 },
        fs22: { fontSize: 22 },
        fs24: { fontSize: 24 },
        fs24b: { fontFamily: 'Quicksand-Bold', fontSize: 24 },
        para: {
            fontSize: 12,
            lineHeight: 16,
            fontFamily: 'Quicksand-Regular',
        },
        runtxtb: {
            fontSize: 12,
            lineHeight: 16,
            fontFamily: 'Quicksand-Bold',
        }
    }

};
export default PiStyles;
