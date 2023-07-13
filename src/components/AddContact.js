import React from 'react'

class AddContact extends React.Component {
    state = {
        name: '',
        email: '',
    };

    add = (e) => {
        e.preventDefault();
        if (this.state.name === "" && this.state.email === "") {
            alert("Please lah cok masukin semua field yang ada") ;
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({name: "", email: ""});
    }
    render() {
         return (
           <div className='ui main'>
                <h2>Tambah Kontak</h2>
                <form className='ui form' onSubmit={this.add}>
                    <div className='field'>
                        <label>Nama</label>
                        <input 
                        type='text' 
                        name='name' 
                        placeholder='Tulis Nama Kamu'
                        value={this.state.name}    
                        onChange={(e => this.setState({name: e.target.value}))}
                        />
                    </div>
                    <div className='field'>
                        <label>Email</label>
                        <input 
                        type='email' 
                        name='email' 
                        placeholder='Masukkan email'
                        value={this.state.email}    
                        onChange={(e => this.setState({email: e.target.value}))}
                        />
                    </div>
                    <button className='ui button blue'>Tambah Kontak</button>
                </form>
            </div>
  )
}

}
export default AddContact
