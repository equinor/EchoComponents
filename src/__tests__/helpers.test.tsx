import renderer from 'react-test-renderer';
import { getIcon } from '../helpers/getIcon';

it('renders Electrical icon successfully', () => {
    const tree = renderer.create(getIcon('Electrical')).toJSON();
    expect(tree).toMatchInlineSnapshot(`
        <svg
          aria-label="electrical"
        />
    `);
});

it('renders Main Equipment icon successfully', () => {
    const tree = renderer.create(getIcon('Main Equipment')).toJSON();
    expect(tree).toMatchInlineSnapshot(`
        <svg
          aria-label="main equipment"
        />
    `);
});

it('renders Line icon successfully', () => {
    const tree = renderer.create(getIcon('Line')).toJSON();
    expect(tree).toMatchInlineSnapshot(`
        <svg
          aria-label="line"
        />
    `);
});

it('renders Manual Valve icon successfully', () => {
    const tree = renderer.create(getIcon('Manual Valve')).toJSON();
    expect(tree).toMatchInlineSnapshot(`
        <svg
          aria-label="manual valve"
        />
    `);
});

it('renders Circuit/Starter icon successfully', () => {
    const tree = renderer.create(getIcon('Circuit/Starter')).toJSON();
    expect(tree).toMatchInlineSnapshot(`
        <svg
          aria-label="circuit/starter"
        />
    `);
});

it('renders Instrument icon successfully', () => {
    const tree = renderer.create(getIcon('Instrument')).toJSON();
    expect(tree).toMatchInlineSnapshot(`
        <svg
          aria-label="instrument"
        />
    `);
});

it('renders Cable icon successfully', () => {
    const tree = renderer.create(getIcon('Cable')).toJSON();
    expect(tree).toMatchInlineSnapshot(`
        <svg
          title="cable"
        />
    `);
});

it('renders Function icon successfully', () => {
    const tree = renderer.create(getIcon('Function')).toJSON();
    expect(tree).toMatchInlineSnapshot(`
        <svg
          aria-label="function"
        />
    `);
});

it('renders Signal icon successfully', () => {
    const tree = renderer.create(getIcon('Signal')).toJSON();
    expect(tree).toMatchInlineSnapshot(`
        <svg
          aria-label="signal"
        />
    `);
});

it('renders Telecom icon successfully', () => {
    const tree = renderer.create(getIcon('Telecom')).toJSON();
    expect(tree).toMatchInlineSnapshot(`
        <svg
          aria-label="telecom"
        />
    `);
});

it('renders Junction Box icon successfully', () => {
    const tree = renderer.create(getIcon('Junction Box')).toJSON();
    expect(tree).toMatchInlineSnapshot(`
        <svg
          aria-label="junction box"
        />
    `);
});

it('renders Administrative icon successfully', () => {
    const tree = renderer.create(getIcon('Administrative')).toJSON();
    expect(tree).toMatchInlineSnapshot(`
        <svg
          aria-label="tag"
        />
    `);
});

it('renders default icon successfully', () => {
    const tree = renderer.create(getIcon('random string')).toJSON();
    expect(tree).toMatchInlineSnapshot(`
        <svg
          aria-label="tag"
        />
    `);
});
