import '../styles/_Form.scss'

interface FormArgs {
    filterOpen: boolean,
    form: any,
    setForm: any
}

const Form = ({ filterOpen, form, setForm }: FormArgs) => {
    return (
        <form className="table__filter"
            style={{ display: filterOpen ? 'block' : 'none' }}
        >
            <div className="table__filter-inputGroup">
                <label htmlFor="org">
                    Organisation
                </label>
                <input
                    type="text"
                    name="org"
                    id="org"
                    placeholder="Organisation"
                    value={form.org}
                    onChange={(e) => setForm({ ...form, org: e.target.value })}
                />
            </div>
            <div className="table__filter-inputGroup">
                <label htmlFor="username">
                    Username
                </label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="User"
                    value={form.username}
                    onChange={(e) => setForm({ ...form, username: e.target.value })}
                />
            </div>
            <div className="table__filter-inputGroup">
                <label htmlFor="email">
                    Email
                </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
            </div>
            <div className="table__filter-inputGroup">
                <label htmlFor="date">
                    Date
                </label>
                <input
                    type="date"
                    name="date"
                    id="date"
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                />
            </div>
            <div className="table__filter-inputGroup">
                <label htmlFor="status">
                    Status
                </label>
                <select name="" id="">
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                    <option value="Pending">Pending</option>
                    <option value="Blacklisted">Blacklisted</option>
                </select>
            </div>
            <div className="table__filter-btn">
                <button>Reset</button>
                <button>Filter</button>
            </div>
        </form>
    )
}

export default Form