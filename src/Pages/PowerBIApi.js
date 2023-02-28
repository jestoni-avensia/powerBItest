import React, { Component } from 'react'
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';

class PowerBIApi extends Component {
    render() {
        return (
            <div>
                <PowerBIEmbed
                    embedConfig={{
                        type: 'report',
                        embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=f6bfd646-b718-44dc-a378-b73e6b528204\u0026groupId=be8908da-da25-452e-b220-163f52476cdd\u0026w=2\u0026config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLU5PUlRILUNFTlRSQUwtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7Im1vZGVybkVtYmVkIjp0cnVlLCJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZX19',
                        tokenType: models.TokenType.Embed,
                        accessToken: 'H4sIAAAAAAAEACWWtc7GDJaD7-VvM1LwDYw0RZiZ04WZOau99_1W07t6fHzs__nHSt9hTot__v0PiEgNDC-r66zmy6158W366UsXaBC1GHLlEnd34WWuDkJ9zuQZHuNcZUHwAdMIofIZ80xH9CU7YgGQR9NuI0Np4I0cf590Lj27FRsi8YxvGw6yMsdFpi8qzdJLt2CDlEeKkyRnvTvPs-yqYELfS7aTZJEth2wGqvvsZAW9wJZw-mAMIxj-izdivsfGSX-mJQ1Kdgjx0DBFysH4paJla2M9GcWwm1Uulm9677RsxFkgL1rhwqum56bMIXlH6umtbZGc9p3Bt0duMOohMQnAhs-qv0Z93-1KpNmV2E_mgMP3AMtGiTex04oZ1tungSzd9bmWyLGBZy50MK9IcUsMtT7sL2p_O9t70MKYeJ7q5GU9Axwyi7Y79rQst2GW8GpvwVpRtfJLe_uIthUhFe6SgUDbd5WzlYQlP4DehHVBKmLgI5PwsRT2te2AltZcdKw80MvY0Ql1VSOtQC9xbRUnsxBLFWsCX-XKToXKHA8yJHpbflj-CEza5KLpQLydJDaIf_1ceTh2z0JPGuLOxvWGJjKrKJhbqDDvhqgO_hEKMzUmfjvEABkB4uQPhoC8DE4EjcKofd2PSSaI8WOVTlhftC7CbeXjO3p_UerTOw4xvAMwlHN9BlPH-eIB5WyIe-iLT6YpxjaPkIIXMC3Fzq_1VA03h19vVICvHfB4F1VKb-TYyV4ym2R78aACHMzNQRLwAHNX2ixbWXjR7sZRbChyy4BKTydkY5Io9B2RN_CDUUksLH5bIWvWtnMGK9RXeXosMLmQFJOMdOPZ7wp1B4XZwfih_KNQ3Rnkp08M0lQOt40VPDjutoEjgQulG60iOu22BMheAKuno31S_ETFcbjeSBE6iPZMmDIKPEfSAAYNoHkSlbh3eP5u-WzqFxPAUFxW14nZguQIDo_TRtwsUAGVeyewNDISNmJvzDBHR2I5NJgCEacebn3gcp68pJqeguOuQYZEXg4lm2h8KJkUvCNDjnCK3WlNXptFYg13FzsEvSNcpHrgQ2IXG1jTf7yiOHWXqhhgdRJwc-PKeS3xEgGtU4YvdSkqTmMhs4ulUb7YaiFciuH-TkASACFrJ1j-xZJjrS3uVcwGi4EQpD_cRxUlc1xYoCbACRpIMW6NEkaL2fahOG1p6hXGESMBkIP70XPlKUhkJpA7WlX2E0lrLyOEwiok9rNB4DBjz772l30q7E3LJm_rwspk8R1FIj0JiRl4dvzMXRZV0l3BzRny-X2wsUAENI2_ju8JNA-WTpKfF2FZPAOoofTiX7pPwZmuNjILIhOLzxhebqacXMQIuSTI7UyQICH9FmX7KkenVUH98T1eYn7h3C9kz7eEcT1YYV0d0QA_pe_m7sMHliGJ9OiaTcRnZgJX7rqvdcrN-ZW9XXK-8at676G5vb3taI-Jr88LQjBLp00YUVD5aQVVev0JIEjK3XL_fcv0l-IGt7VW3BuwvkbBACMiOKdiaJ8PZ9KbVFEiQk0jPgYuGY1tUS9LKWGafLuupmwYgXB9sWQgLORFm3ALTToQHqpRupHZ9I1or-y3_TWapfldyx3M5OYEWIdBrXatPt0diVDlVxdZb8WLgad1WZJst-iKlC5YDwDgruIA90qojiHCzgtzpm7VMsLgZemxYZX761eqInKbRr1xS9mmUC6BYaat4Fps86J88ja1-gD8D58dGI3x9YuxXPEP-_SyZJGG60kBCDTwtk3iMfW9QYBiWQKVBVpl1haXfCfHKpLp_XsBOMKsV_x7cAvb86S_oFof5tKvCwZIlZyRGOTK4q_C3ZK0-RCH1ceSrDwdIzrwnERdELoWqcasMm48Gl3qAREj2DznBBPHgFPLvHyRban2y5WPnxgmGl5ryfQZM4JgKOfGAUOv9yehqJo82UWY4oh2ff8SXC8PVZfzwKs6xORuG2AYmehUG2VAcELVE2O_hla8AvAN_sF_hqQR2f0ueexzvgjR4v-f612j1vMBRvX3iqh-n3tZixO6nJHfUJmvsctCymNBJCZHvdi_vUSsjgopZXXOD51A_JAWE96R64hGH9bOT1unMKpDP1amUFpWL_3EiqCRklBUhB3RmPqaCYliV_LzfYl8r4gdgZOLHbHZc2kx21qm6jJ4gRENT4k6HERZNdObHrk2x5ZXK4iH6x6w3zJpHW74ytG_7X4G2zilMEEkKIPtUccpepKQ_aKx-UZElC_2ed9rOh4QRYJUKARIp8Y70wznQcWt90YN4vY8_P0T1wnaGyZQRwgFUPFS1Jxfr1dv8Gp_W5pvYH9b4UWMA4KaPYNTFZZCzwOiibqHzfnIQMNzBU3r0byDjtnvACdBxzmFiwRKYsfspFPNcUDqGsx8xLe2_Z1TjN7PME4y7FOkKeLSiDaBBGfo_K-GoUo2wdA5wAB7YUpmyuf2mrI2IY3fcn9Fy2Y8oDqpAa6ju3DbhL_GnTeVlZUJMLnMhVgQ3XW27aiHLiGf4sBq1Bf7P__551__sNu7HLNavn8zTeHVrFlPalVhGNphYNFELhWu4Ge3f1H9HvrZlPs0sFdNwx765i1vE_RjUs6SVim46Y4iljKldwul94IriRdao_PM79sd20x3Co3xTsNKDI5BmRRAEqi5BX7O9GLQ_4pNqVojpzKYXrn7Txqug4GIDlNVCZuSDeNDnAfmGTbRlnorFPpUkWN9Jw3WshnPJ8-ory9EVSdJS_7DRbjW8No0mHWzaYhufoAUkcQVFiLwkzgq6urKSfevCyK9Rmhycko06YsK9pncUo8s_lszDoqI-o5la8BhsI1gGDJ1zWXA5VCJ2W33S5Sssf6QcFIb_H0kz5_7bQNbEys6O02lycU7pRPR_8X8Lk25ycEfZU7OCYqPZ82_wHjHYI3dJfO_ZrhtPaXHuZV_MmE3GWHUa1J5HWeYWYuuYZ17tn5jxTDuJPBNOBOcaA3f-C7CbLxGiPfKSxHtdKCgX1TIjG_azD79jWyGtXxXBCKSXcbY_bVpOvBwC6XXEFzIp3Gv342FqdcFScPyJDPmJsnCYlOT_uJ2_Ipuk_N5OaDC40h-0RJjBxX6ukfsBN9R038IkckgLnNG2sEWH8kD3R8PEOLnUf-oJ7I782IecAyEvVOQBWGQ4uwntmOBuwFXfHNZ7jdVFVSPZJL5eOMstnws6dEknOOXLWN0HvPNnQgxMy8Khqp5WOEnNh_irtK6DSZOJlt8z7XMYNn8PGAIidP4boQiikdVAfqK25M-m7Ws_zD_7_8BY_YE7ZoMAAA=.eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLU5PUlRILUNFTlRSQUwtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJleHAiOjE2Nzc1NzAzMjcsImFsbG93QWNjZXNzT3ZlclB1YmxpY0ludGVybmV0Ijp0cnVlfQ==',
                        settings: {
                            panes: {
                                filters: {
                                    expanded: false,
                                    visible: true
                                }
                            },
                            /*background: models.BackgroundType.Transparent,*/
                        }
                        /*type: 'report',   // Supported types: report, dashboard, tile, visual and qna
                        id: '<Report Id>',
                        embedUrl: '<Embed Url>',
                        accessToken: '<Access Token>',
                        tokenType: models.TokenType.Embed,
                        settings: {
                          panes: {
                            filters: {
                              expanded: false,
                              visible: false
                            }
                          },
                          background: models.BackgroundType.Transparent,
                        }*/
                    }}

                    eventHandlers={
                        new Map([
                            ['loaded', function () { console.log('Report loaded'); }],
                            ['rendered', function () { console.log('Report rendered'); }],
                            ['error', function (event) { console.log(event.detail); }]
                        ])
                    }

                    cssClassName={"report-style-class"}

                    getEmbeddedComponent={(embeddedReport) => {
                        window.report = embeddedReport;
                    }}
                />

            </div>
        )
    }
}

export default PowerBIApi