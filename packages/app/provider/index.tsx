import { Dripsy } from 'app/provider/dripsy'
import { DeviceProvider } from 'app/provider/device'

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <DeviceProvider>
      <Dripsy>{children}</Dripsy>
    </DeviceProvider>
  )
}
