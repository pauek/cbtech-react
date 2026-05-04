import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"

export default function Home() {
  return (
    <main className="flex flex-col gap-6 p-6">
      <section>
        <h2>Button</h2>
        <div className="flex flex-row gap-2">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
        <Button size="xs">Little</Button>
      </section>

      <section>
        <h2>Input</h2>
        <div className="flex flex-col gap-2">
          <Input name="login" placeholder="Entra el nombre" />
          <Input type="password" name="password" />
          <Input name="firstName" aria-invalid />
        </div>
      </section>

      <section>
        <h2>Select</h2>
        <Select onValueChange={(value) => console.log("Nuevo valor!", value)}>
          <SelectTrigger className="w-45">
            <SelectValue placeholder="Mira las opciones" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectGroup>
            <SelectSeparator />
            <SelectGroup>
              {[..."abcdefghijklm"].map((ch) => (
                <SelectItem key={ch} value={ch}>
                  {ch}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </section>

      <section>
        <h2>Card</h2>
        <div className="grid grid-cols-2 gap-2">
            
          <Card>
            <CardHeader>
              <CardTitle>Bicicleta Eléctrica</CardTitle>
              <CardDescription>Modelo Blazing Fast</CardDescription>
              <CardAction>
                <Button>Buy</Button>
              </CardAction>
            </CardHeader>
            <CardContent>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis beatae vel eos labore perspiciatis officiis enim ex
                libero. Numquam officia, nam excepturi in nesciunt vero? At,
                illum recusandae? Quam, quibusdam.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Patinete Eléctrica</CardTitle>
              <CardDescription>Modelo Bongo</CardDescription>
              <CardAction>
                <Button>Buy</Button>
              </CardAction>
            </CardHeader>
            <CardContent>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis beatae vel eos labore perspiciatis officiis enim ex
                libero. Numquam officia, nam excepturi in nesciunt vero? At,
                illum recusandae? Quam, quibusdam.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
