import '../style.css'

export default function SelectPercentage({children}) {
    return(
        <div>
          <span>{children}</span>
          <select name="" id="">
            <option value="">Dissatisfied (0%)</option>
            <option value="">It was okay (5%)</option>
            <option value="">It was good (10%)</option>
            <option value="">Absolutely Amazing (20%)</option>
          </select>
        </div>
    )
}