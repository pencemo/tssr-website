import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { states } from "@/lib/List";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAllCourse, useRequestAtc } from "@/hooks/useReactQuery";
import { MultiSelect } from "../ui/MultiSelect";
import { Button } from "../ui/button";

import { AlertCircle, Building2, Mail, Phone, User, MapPin, GraduationCap } from "lucide-react"
import { toast } from "sonner";
import { Alert, AlertDescription } from "@/components/ui/alert"

function AtcReqForm() {
    const [error, setError] = useState(null)
    const [selected, setSelected] = useState([])
    const {data}=useAllCourse()
    const {mutate, isPending}=useRequestAtc()
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      phoneNumber: "",
      place: "",
      district: "",
      state: "",
      pincode: "",
      centerHead: "",
      courses: "",
    })
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value })
      if (error) setError(null) // Clear error when user starts typing
    }

    const handleCancel = ()=>{
      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        place: "",
        district: "",
        state: "",
        pincode: "",
        centerHead: "",
        courses: "",
      })
      setSelected([])
      setError(null)
    }
      
  
    const handleSubmit = async (e) => {
      e.preventDefault()
  
      // Basic validation
      const requiredFields = ["name", "email", "phoneNumber", "centerHead", "place", "district", "state", "pincode"]
      const emptyFields = requiredFields.filter((field) => !formData[field])
  
      if (emptyFields.length > 0 || selected.length === 0) {
        setError("Please fill in all required fields and select at least one course.")
        return
      }
      const data = {...formData, courses: selected}
      mutate(data, {
        onSuccess: (data) => {
          if(data.success){
            setError(null)
            handleCancel()
            toast.success(data.message)
          }else{
            setError(data.message)
            toast.error(data.message)
          }
        }
      })
      
     
    }
  
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Building2 className="w-4 h-4" />
              TSSR Council
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">ATC Registration</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join our network of Authorized Training Centers and help shape the future of education
            </p>
          </div>
  
          {/* Form Card */}
          <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-8">
              <CardTitle className="text-2xl font-semibold text-gray-900">Registration Details</CardTitle>
              <CardDescription className="text-base text-gray-600">
                Please provide accurate information for your training center registration
              </CardDescription>
            </CardHeader>
  
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8 w-full">
                {error && (
                  <Alert variant="destructive" className="border-red-200 bg-red-50">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}
  
                {/* Center Information Section */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2 pb-2 border-b border-gray-200">
                    <Building2 className="w-5 h-5 text-blue-600" />
                    <h3 className="text-lg font-semibold text-gray-900">Center Information</h3>
                  </div>
  
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormInput
                      label="Center Name"
                      icon={<Building2 className="w-4 h-4" />}
                      error={error && formData.name === ""}
                      name="name"
                      placeholder="Enter center name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    <FormInput
                      label="Center Head"
                      icon={<User className="w-4 h-4" />}
                      error={error && formData.centerHead === ""}
                      name="centerHead"
                      placeholder="Enter center head name"
                      type="text"
                      value={formData.centerHead}
                      onChange={handleChange}
                    />
                  </div>
                </div>
  
                {/* Contact Information Section */}
                <div className="space-y-6">
                  {/* <div className="flex items-center gap-2 pb-2 border-b border-gray-200">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <h3 className="text-lg font-semibold text-gray-900">Contact Information</h3>
                  </div> */}
  
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormInput
                      label="Email Address"
                      icon={<Mail className="w-4 h-4" />}
                      error={error && formData.email === ""}
                      name="email"
                      placeholder="Enter email address"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <FormInput
                      label="Phone Number"
                      icon={<Phone className="w-4 h-4" />}
                      error={error && formData.phoneNumber === ""}
                      name="phoneNumber"
                      placeholder="Enter phone number"
                      type="tel"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                    />
                  </div>
                </div>
  
                {/* Location Section */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2 pb-2 border-b border-gray-200">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <h3 className="text-lg font-semibold text-gray-900">Location Details</h3>
                  </div>
  
                  <StateSelect error={error} formData={formData} setFormData={setFormData} />
  
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormInput
                      label="Place/Area"
                      icon={<MapPin className="w-4 h-4" />}
                      error={error && formData.place === ""}
                      name="place"
                      placeholder="Enter place or area"
                      type="text"
                      value={formData.place}
                      onChange={handleChange}
                    />
                    <FormInput
                      label="Pincode"
                      icon={<MapPin className="w-4 h-4" />}
                      error={error && formData.pincode === ""}
                      name="pincode"
                      placeholder="Enter pincode"
                      type="text"
                      value={formData.pincode}
                      onChange={handleChange}
                    />
                  </div>
                </div>
  
                {/* Courses Section */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2 pb-2 border-b border-gray-200">
                    <GraduationCap className="w-5 h-5 text-blue-600" />
                    <h3 className="text-lg font-semibold text-gray-900">Course Selection</h3>
                  </div>
  
                  <div>
                    <Label className="text-sm font-medium text-gray-700 mb-2 block">Select Courses to Offer</Label>
                    <MultiSelect
                      options={data?.data}
                      selected={selected}
                      onChange={setSelected}
                      placeholder="Choose courses for your center"
                      error={error && selected.length === 0}
                    />
                    <p className="text-sm text-gray-500 mt-2">
                      Select all courses you plan to offer at your training center
                    </p>
                  </div>
                </div>
  
                {/* Submit Button */}
                <div className="pt-6 w-full ">
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    {isPending ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Submitting...
                      </>
                    ) : (
                      "Submit Registration"
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }
  
  const FormInput = ({ label, type, placeholder, name, value, onChange, error, icon }) => {
    return (
      <div className="space-y-2">
        <Label htmlFor={name} className="text-sm font-medium text-gray-700">
          {label}
        </Label>
        <div className="relative">
          {icon && <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">{icon}</div>}
          <Input
            id={name}
            type={type}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange}
            className={`${icon ? "pl-10" : ""} h-11 border-gray-200 focus:border-blue-500 focus:ring-blue-500 ${
              error ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""
            }`}
          />
        </div>
      </div>
    )
  }
  
  const StateSelect = ({ setFormData, formData, error }) => {
    const [districts, setDistricts] = useState([])
  
    const handleStateChange = (stateName) => {
      setFormData({ ...formData, state: stateName, district: "" })
      const foundState = states.find((item) => item.state === stateName)
      setDistricts(foundState ? foundState.districts : [])
    }
  
    return (
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700">State</Label>
          <Select value={formData.state} onValueChange={handleStateChange}>
            <SelectTrigger
              className={`w-full py-5 border-gray-200 focus:border-blue-500 focus:ring-blue-500 ${
                error && formData.state === "" ? "border-red-500" : ""
              }`}
            >
              <SelectValue placeholder="Select State" />
            </SelectTrigger>
            <SelectContent>
              {states.map((item, i) => (
                <SelectItem key={i} value={item.state}>
                  {item.state}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
  
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700">District</Label>
          <Select
            value={formData.district}
            onValueChange={(value) => setFormData({ ...formData, district: value })}
            disabled={districts.length === 0}
          >
            <SelectTrigger
              className={`w-full py-5 border-gray-200 focus:border-blue-500 focus:ring-blue-500 ${
                error && formData.district === "" ? "border-red-500" : ""
              }`}
            >
              <SelectValue placeholder="Select District" />
            </SelectTrigger>
            <SelectContent>
              {districts.map((district, i) => (
                <SelectItem key={i} value={district}>
                  {district}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    )
  }
  
  export default AtcReqForm