const Alert = ({alert}) => {
    if (alert === null) {
        return null
    } else {
    return (
        <div>
        <strong>Nimellä '{alert}' löytyy jo yhteystieto</strong>
        <br />
        </div>
    )
}}

export default Alert