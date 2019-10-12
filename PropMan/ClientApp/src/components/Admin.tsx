import React, { Component } from 'react'
import {PropertyData} from './FetchProperty'

interface AddPropertyDataState {
    loading: boolean;
    propData: PropertyData,
    newPropData: {
        propertyId: 0,
        propertyName: "",
        propertyAddress: "",
        propertyCity: "",
        propertyState: "",
        propertyZip: 0,
        propertyStudioUnitsRented: 0,
        propertyStudioUnits: 0,
        propertyOneBedroomUnitsRented: 0,
        propertyOneBedroomUnits:  0,
        propertyCatsAllowed: "",
        propertyDogsAllowed: "",
        propertyDescription: "",
        propertyImage: "",
    }
}

interface Props {}

interface EventTarget {
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    dispatchEvent(evt: Event): boolean;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

interface SyntheticEvent {
    bubbles: boolean;
    cancelable: boolean;
    currentTarget: EventTarget;
    defaultPrevented: boolean;
    eventPhase: number;
    isTrusted: boolean;
    nativeEvent: Event;
    preventDefault(): void;
    stopPropagation(): void;
    target: EventTarget;
    timeStamp: Date;
    type: string;
}

export class AdminForm extends Component<Props, AddPropertyDataState> {  
    
    constructor(props: Props){
        super(props)
        this.state={
            loading: true,
            propData: new PropertyData,
            newPropData:{
                propertyId: 0,
                propertyName: "",
                propertyAddress: "",
                propertyCity: "",
                propertyState: "",
                propertyZip: 0,
                propertyStudioUnitsRented: 0,
                propertyStudioUnits: 0,
                propertyOneBedroomUnitsRented: 0,
                propertyOneBedroomUnits:  0,
                propertyCatsAllowed: "",
                propertyDogsAllowed: "",
                propertyDescription: "",
                propertyImage: "",
            }
        }
        this.handleSave = this.handleSave.bind(this)
    }

    componentDidMount(){
        fetch("api/Property/GetPropertiesList")
         .then(response=> response.json() as Promise<PropertyData>)
         .then(data=>{
             this.setState(prevState=>({
                 propData: data,
                 loading: !prevState.loading,
             }))
         })
    }

    private handleSave(e: React.SyntheticEvent){
        e.preventDefault();
        const data = this.state.newPropData

        if (this.state.newPropData.propertyId){
            fetch("api/PropertyData/Edit", {
                method: "PUT",

            })
        }
    }

    private handleChange(e: React.ChangeEvent<HTMLInputElement>){

        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState(prevState=>({
            ...prevState,
            [name]: value,
        }))
    }

    public render(){
        let contents = this.state.loading ?
        <p>Loading...</p> :
        this.renderAddPropertyForm();
    
        return (
            <div>
                {contents}
            </div>
        )
    }
    
    private renderAddPropertyForm(){
    return (
        <div className="admin">
            <h3 className="align-center">To add a property, enter information below</h3>
            <form >
                <div className="flex-row container-padding no-padding-bottom">
                     <div>
                        <input type="hidden" name="propID" value={this.state.newPropData.propertyId}></input>
                    </div>
                    <div className="flex-col">
                        <label>Property Name</label>
                        <input type="text" name="propName" placeholder="Property Name" defaultValue={this.state.newPropData.propertyName} onChange={this.handleChange}></input>
                    </div>
                    <div className="flex-col">
                        <label>Address</label>
                        <input type="text" name="propAddress" placeholder="Address" defaultValue={this.state.newPropData.propertyAddress} onChange={this.handleChange}></input>
                    </div>
                    <div className="flex-col">
                        <label>City</label>
                        <input type="text" name="propCity" placeholder="City" defaultValue={this.state.newPropData.propertyCity} onChange={this.handleChange}></input>
                    </div>
                    <div className="flex-col">
                        <label>State</label>
                        <input type="text" name="propState" placeholder="State" defaultValue={this.state.newPropData.propertyState} onChange={this.handleChange}></input>
                    </div>
                    <div className="flex-col">
                        <label>Zip</label>
                        <input type="text" name="propZip" placeholder="Zip Code" defaultValue={this.state.newPropData.propertyZip} onChange={this.handleChange}></input>
                    </div>
                    <div className="flex-col">
                        <label>Studio Units Rented</label>
                        <input type="text" name="propStudioUnitsRented" placeholder="Studios rented" defaultValue={this.state.newPropData.propertyStudioUnitsRented} onChange={this.handleChange}></input>
                    </div>
                    <div className="flex-col">
                        <label>Studio Units</label>
                        <input type="text" name="propStudioUnits" placeholder="Studios" defaultValue={this.state.newPropData.propertyStudioUnits} onChange={this.handleChange}></input>
                    </div>
                    <div className="flex-col">
                        <label>One Bedroom Units Rented</label>
                        <input type="text" name="propOneBedRoomUnitsRented" placeholder="One bedrooms rented" defaultValue={this.state.newPropData.propertyOneBedroomUnitsRented} onChange={this.handleChange}></input>
                    </div>
                    <div className="flex-col">
                        <label>One Bedroom Units</label>
                        <input type="text" name="propOneBedRoomUnits" placeholder="One bedrooms" defaultValue={this.state.newPropData.propertyOneBedroomUnits} onChange={this.handleChange}></input>
                    </div>
                    <div className="flex-col fill-width">
                        <label>Cats Allowed</label>
                        <select name="propCatsAllowed" defaultValue={this.state.newPropData.propertyCatsAllowed} >
                            <option value="No">No</option>
                            <option value="Yes">Yes</option>
                        </select>
                    </div>
                    <div className="flex-col fill-width">
                        <label>Dogs Allowed</label>
                        <select name="propDogsAllowed" defaultValue={this.state.newPropData.propertyDogsAllowed}>
                            <option value="No">No</option>
                            <option value="Yes">Yes</option>
                        </select>
                    </div>
                    <div className="flex-col fill-width">
                        <label className="display-block">Image</label>
                        <input name="propertyImage" placeholder="image URL" defaultValue={this.state.newPropData.propertyImage} onChange={this.handleChange}></input>
                    </div>
                </div>
                <div className="flex-col">
                    <label className="display-block">Property Description</label>
                    <textarea name="propertyDescription" placeholder="Property Description" defaultValue={this.state.newPropData.propertyDescription} ></textarea>
                </div>
                <button type="submit" className="btn-submit">Add Property</button>
            </form>
        </div>
    )}
}