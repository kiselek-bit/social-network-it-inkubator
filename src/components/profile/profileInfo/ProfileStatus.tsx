import React, {ChangeEvent} from "react";
import s from './ProfileInfo.module.css'

type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

export class ProfileStatus extends React.Component<PropsType, {}> {
    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.props.updateStatus(this.state.status)
        this.setState({
            editMode: false
        })
    }
    onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {this.state.editMode
                    ? <input onChange={this.onChangeStatus} autoFocus onBlur={this.deactivateEditMode} value={this.state.status}/>
                    : <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                }
            </div>
        )
    }
}